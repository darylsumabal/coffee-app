<?php

namespace App\Http\Controllers;

use App\Http\Requests\OrderRequest;
use App\Models\Addon;
use App\Models\Customer;
use App\Models\Drink;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderStatus;
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
        $customer = Customer::create([
            'employee_id' => $request->employee_id,
            'name' => $request->name,
            'email' => $request->email,
        ]);

       $order =  Order::create([
            'customer_id' => $customer->id,
            'addon_id' => $request->addon_id,
            'drink_id' => $request->drink_id,
            'temperature' => $request->temperature,
        ]);

      $orderItem =  OrderItem::create([
            'order_id' => $order->id,
            'total_quantity' => 1,
            'total_price' => $request->total,

        ]);

        OrderStatus::create([
            'order_item_id'=>$orderItem->id,
            'status'=> false,
            'position'=> 1,
        ]);

        return redirect()->back()->with('success', 'Order success!');
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
