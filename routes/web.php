<?php
use App\Http\Controllers\HomeController;
use Illuminate\Support\Facades\Route;
Route::get('/', [HomeController::class,'index'])->name('home');
Route::post('/login', [HomeController::class,'login'])->name('home');
Route::get('/dashboard', [HomeController::class,'dashboard'])->name('dashboard');
Route::resource('user', 'UserController');
Route::resource('enrolments', 'EnrolmentController');
Route::resource('events', 'EventController');
Route::resource('progress', 'ProgressController');
Route::resource('materials', 'MaterialController');
Route::resource('skills', 'SkillsController');