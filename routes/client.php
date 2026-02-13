<?php

use App\Http\Controllers\MenuController;
use App\Models\Drink;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('welcome', [
        // 'canRegister' => Features::enabled(Features::registration()),
        'showAuth' => false,
        'isAdmin' => false,
        'drinks'=>    $drinks = Drink::inRandomOrder()->take(8)->get()
    ]);
})->name('home');


