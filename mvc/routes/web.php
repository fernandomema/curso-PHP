<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PaisController;
use App\Http\Controllers\DepartamentoController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('auth/login', function () {
    return view('auth.login');
})->name('auth.login');

Route::get('auth/logout', function () {
    return "Logout";
})->name('auth.logout');

Route::get('catalog', 'CatalogController@index')->name('catalog.index');

Route::get('catalog/show/{id}', 'CatalogController@show')->name('catalog.show');

Route::get('catalog/create', 'CatalogController@create')->name('catalog.create');

Route::get('catalog/edit/{id}', 'CatalogController@edit')->name('catalog.edit');