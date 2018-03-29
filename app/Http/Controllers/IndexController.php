<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class IndexController extends Controller
{
	public function indexAction()
	{
		return view('index');
	}
}