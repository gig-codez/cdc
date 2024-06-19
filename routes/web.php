<?php
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
Route::get('/', [HomeController::class,'index'])->name('home');

Route::resource('enrolments', 'EnrolmentController');
Route::resource('events', 'EventController');
Route::resource('progress', 'ProgressController');
Route::resource('materials', 'MaterialController');
Route::resource('skills', 'SkillsController');