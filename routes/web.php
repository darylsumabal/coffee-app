<?php

use App\Http\Controllers\ManageOrderController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;


Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'showAuth' => true,
            'isAdmin' => true,
        ]);
    })->name('admin.home');


    Route::get('/dashboard', function () {
        return Inertia::render('dashboard');
    })->middleware(['auth', 'verified'])->name('dashboard');


    Route::get('/orders', [ManageOrderController::class, 'index']);

    Route::put('/orders/{id}', [ManageOrderController::class, 'update']);

    require __DIR__ . '/drink.php';
    require __DIR__ . '/addon.php';
});

require __DIR__ . '/order.php';
require __DIR__ . '/menu.php';
require __DIR__ . '/client.php';
require __DIR__ . '/settings.php';
