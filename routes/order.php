<?php


use App\Http\Controllers\Drinks\DrinkController;
use App\Http\Controllers\MenuController;
use App\Http\Controllers\OrderController;
use Illuminate\Support\Facades\Route;

Route::prefix('orders')->group(function () {
    Route::get('/', [OrderController::class, 'index']);
    // Route::get('/create', [MenuController::class, 'create']);
    // Route::get('/checkout', [MenuController::class, 'show']);
    // Route::post('/checkout', [MenuController::class, 'store']);
    // Route::put('/{id}', [MenuController::class, 'update']);
    // Route::delete('/{id}', [DrinkController::class, 'destroy']);
});
