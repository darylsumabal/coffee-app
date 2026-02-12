<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddonRequest;
use App\Models\Addon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AddonController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // return Inertia::render('drink/Index', [
        //     'addons' => Addon::all()
        // ]);
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(AddonRequest $request)
    {
        Addon::create([
            'addon_name' => $request->addon_name,
            'extra_price' => $request->extra_price,
            'availability' => $request->availability,
        ]);

        return redirect()->back()->with('success', 'Addon created!');
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AddonRequest $request, Addon $addon)
    {

        $data = $request->validated();

        $addon->update($data);

        return redirect()->back()->with('success', 'Edited successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Addon $addon)
    {
        $addon->delete();
        return redirect()->back()->with('success', 'Addon deleted!');
    }
}
