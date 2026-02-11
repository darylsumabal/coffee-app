<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Addon;
use App\Models\Drink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MenuController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('menu/Index', [
            'drinks' => Drink::all(),
            'addons' => Addon::all(),
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(OrderRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {
        $orderData = $request->all();

        return Inertia::render('checkout/Index', [
            'orderData' => $orderData,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
