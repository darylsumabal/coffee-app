<?php

use App\Http\Controllers\Drinks\DrinkController;
use Illuminate\Support\Facades\Route;

Route::prefix('drink')->group(function () {
    Route::get('/', [DrinkController::class, 'index']);
    Route::get('/create', [DrinkController::class, 'create']);
    Route::post('/', [DrinkController::class, 'store']);
    Route::put('/{id}', [DrinkController::class, 'update']);
    Route::delete('/{id}', [DrinkController::class, 'destroy']);
});
