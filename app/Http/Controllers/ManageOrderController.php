<?php

namespace App\Http\Controllers;

use App\Events\OrderEvent;
use App\Models\Order;
use App\Models\OrderItem;
use App\Models\OrderStatus;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ManageOrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = OrderItem::with([
            'order.addon',
            'order.drink',
            'order.customer',
            'status'
        ])->get();
        return Inertia::render('order/IndexAdmin', ['orders' => $orders,]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    // public function update(Request $request, $id)
    // {
    //     $orderStatus = OrderStatus::findOrFail($id);
    //     $validated = $request->validate([
    //         'status' => 'boolean',
    //     ]);

    //     $orderStatus->update($validated);
    //     broadcast(new OrderEvent($orderStatus))->toOthers();

    //     return redirect()->back()->with('success', 'Order updated');
    // }

    public function update(Request $request, $id)
    {
        $orderStatus = OrderStatus::findOrFail($id);

        $validated = $request->validate([
            'status' => 'boolean',
        ]);

        if ($validated['status'] === true) {
            // If order is ready, set its position to 0
            $orderStatus->update([
                'status' => true,
                'position' => 0, // ready orders get position 0
            ]);

            // Reorder all other orders with status = false starting from 1
            $pendingOrders = OrderStatus::where('id', '!=', $orderStatus->id)
                ->where('status', false)
                ->orderBy('position')
                ->get();

            $pos = 1;
            foreach ($pendingOrders as $order) {
                $order->position = $pos++;
                $order->save();
            }
        } else {
            // If order is no longer ready, assign next available position
            $maxPosition = OrderStatus::where('status', false)->max('position') ?? 0;

            $orderStatus->update([
                'status' => false,
                'position' => $maxPosition + 1,
            ]);
        }

        // Broadcast update
        broadcast(new OrderEvent($orderStatus))->toOthers();

        return redirect()->back()->with('success', 'Order updated');
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Order $order)
    {
        $order->delete();
        broadcast(new OrderEvent($order))->toOthers();
        return redirect()->back()->with('success', 'Addon deleted!');
    }
}
