<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\EducationalMaterialController;
use App\Http\Controllers\EnrolmentController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ProgressTrackingController;
use App\Http\Controllers\SkillsTrainingController;
use Illuminate\Support\Facades\Route;

// Route::get('/', [AuthController::class, 'index'])->name('intro');
Route::get('/', [AuthController::class, 'showLoginForm'])->name('home');
Route::post('/login', [AuthController::class, 'login'])->name('login');
Route::group(['middleware' => 'auth', "prefix" => "cdc"], function () {
    Route::get('/dashboard', [HomeController::class, 'dashboard'])->name('dashboard');
    // Route::resource('user', UserController::class);
    Route::group(['prefix' => 'enrollments'], function () {
        Route::get('/add-member', [EnrolmentController::class, 'create'])->name('enrollments.create');
        Route::get('/viewAll', [EnrolmentController::class, 'index'])->name('enrollments.index');
        Route::post('/enroll', [EnrolmentController::class, 'store'])->name('enrollments.store');
        Route::get('/{enrolment}', [EnrolmentController::class, 'show'])->name('enrollments.show');
        Route::get('/{enrolment}/edit', [EnrolmentController::class, 'edit'])->name('enrollments.edit');
        Route::put('/{enrolment}', [EnrolmentController::class, 'update'])->name('enrollments.update');
        Route::delete('delete/{enrolment}', [EnrolmentController::class, 'destroy'])->name('enrollments.destroy');
    });
    // events routes
    Route::group(
        [
            "prefix" => "events",
        ], function () {
            Route::get('/all', [EventController::class, 'index'])->name('events.index');
            Route::get('/create', [EventController::class, 'create'])->name('events.create');
            Route::post('/add-event', [EventController::class, 'store'])->name('events.store');
            Route::get('/{event}', [EventController::class, 'show'])->name('events.show');
            Route::get('/{event}/edit', [EventController::class, 'edit'])->name('events.edit');
            Route::put('update/{event}', [EventController::class, 'update'])->name('events.update');
            Route::delete('delete/{event}', [EventController::class, 'destroy'])->name('events.destroy');
        }
    );
    Route::resource('progress', ProgressTrackingController::class);
    Route::resource('materials', EducationalMaterialController::class);
    Route::resource('skills', SkillsTrainingController::class);
});
