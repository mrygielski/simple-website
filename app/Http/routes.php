<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Wszystkie gety kierowane do głównego kontrolera z angularem
Route::get('{x}', 'IndexController@indexAction')->where('x', '[a-z/]*');
Route::post('/send', 'ContactController@sendAction');
