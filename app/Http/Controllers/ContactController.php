<?php

namespace App\Http\Controllers;

use App\Domain\Entities\ContactForm;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;
use Illuminate\Mail\Message;
use Validator;
use EntityManager;
use Mail;
use Config;

/**
 * @package App\Http\Controllers
 */
class ContactController extends BaseController
{
    public function sendAction(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'text'  => 'required',
            'title' => 'required'
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 'fail']);
        }

        $contact_form = new ContactForm();
        $contact_form->text = e($request->input('text'));
        $contact_form->title = e($request->input('title'));
        $contact_form->name = e($request->input('name'));
        $contact_form->phone = e($request->input('phone'));
        $contact_form->email = e($request->input('email'));
        EntityManager::persist($contact_form);
        EntityManager::flush();

        $destination_mail = Config::get('email.contact_form_email');
        Mail::send('emails.contact', [
            'contact_form' => $contact_form
        ], function (Message $message) use ($destination_mail) {
            $message->to($destination_mail)->subject('Wiadomość z formularza kontaktowego');
        });

        return response()->json(['status' => 'ok']);

    }
}