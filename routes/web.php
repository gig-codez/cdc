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
Route::post('/logout', [AuthController::class, 'logout'])->name('login');
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
    // progress tracking routes
    Route::group(
        [
            "prefix" => "progress-tracking",
        ], function () {
            Route::get('/view-records', [ProgressTrackingController::class, 'index'])->name('progress-tracking.index');
            Route::get('/create-record', [ProgressTrackingController::class, 'create'])->name('progress-tracking.create');
            Route::post('/add-progress', [ProgressTrackingController::class, 'store'])->name('progress-tracking.store');
            Route::get('/{progress}/show', [ProgressTrackingController::class, 'show'])->name('progress-tracking.show');
            Route::get('/{progress}/edit', [ProgressTrackingController::class, 'edit'])->name('progress-tracking.edit');
            Route::put('/update/{progress}', [ProgressTrackingController::class, 'update'])->name('progress-tracking.update');
            Route::delete('/delete/{progress}', [ProgressTrackingController::class, 'destroy'])->name('progress-tracking.destroy');
        }
    );
// educational material routes
    Route::group(
        [
            "prefix" => "educational-materials",
        ], function () {
            Route::get('/view-distributions', [EducationalMaterialController::class, 'index'])->name('educational-materials.index');
            Route::get('/create-distribution', [EducationalMaterialController::class, 'create'])->name('educational-materials.create');
            Route::post('/add-material', [EducationalMaterialController::class, 'store'])->name('educational-materials.store');
            Route::get('/{educationalMaterial}', [EducationalMaterialController::class, 'show'])->name('educational-materials.show');
            Route::get('/{educationalMaterial}/edit', [EducationalMaterialController::class, 'edit'])->name('educational-materials.edit');
            Route::put('/update/{educationalMaterial}', [EducationalMaterialController::class, 'update'])->name('educational-materials.update');
            Route::delete('/delete/{educationalMaterial}', [EducationalMaterialController::class, 'destroy'])->name('educational-materials.destroy');
        }
    );
    // skills training routes
    Route::group(
        [
            "prefix" => "skills-training",
        ], function () {
            Route::get('/view-skills', [SkillsTrainingController::class, 'index'])->name('skills-training.index');
            Route::get('/create-skill', [SkillsTrainingController::class, 'create'])->name('skills-training.create');
            Route::post('/add-skill', [SkillsTrainingController::class, 'store'])->name('skills-training.store');
            Route::get('/{skillsTraining}', [SkillsTrainingController::class, 'show'])->name('skills-training.show');
            Route::get('/{skillsTraining}/edit', [SkillsTrainingController::class, 'edit'])->name('skills-training.edit');
            Route::put('/update/{skillsTraining}', [SkillsTrainingController::class, 'update'])->name('skills-training.update');
            Route::delete('/delete/{skillsTraining}', [SkillsTrainingController::class, 'destroy'])->name('skills-training.destroy');
        }
    );
});
