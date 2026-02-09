<?php

use App\Http\Controllers\MenuController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('welcome', [
        // 'canRegister' => Features::enabled(Features::registration()),
        'showAuth' => false,
        'isAdmin' => false,
    ]);
})->name('home');


Route::get('/menu', [MenuController::class, 'index']);
