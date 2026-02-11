<?php

use App\Http\Controllers\AddonController;
use App\Http\Controllers\Drinks\DrinkController;
use Illuminate\Support\Facades\Route;

Route::prefix('addon')->group(function () {
    Route::post('/', [AddonController::class, 'store']);
    Route::put('/{id}', [AddonController::class, 'update']);
    Route::delete('/{id}', [DrinkController::class, 'destroy']);
});
