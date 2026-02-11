<?php

namespace App\Http\Controllers\Drinks;

use App\Http\Controllers\Controller;
use App\Http\Requests\DrinkRequest;
use App\Models\Addon;
use App\Models\Drink;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DrinkController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('drink/Index', [
            'drinks' => Drink::all(),
            'addons' => Addon::all()
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(DrinkRequest $request)
    {
        $posterPath = null;
        if ($request->hasFile('drink_image')) {
            $poster = $request->file('drink_image');
            $posterName = uniqid() . '-' . $poster->getClientOriginalName();
            $posterPath = $poster->storeAs('image', $posterName, 'public');
            // $posterPath now contains the path like "poster/12345-myfile.jpg"
        }

        Drink::create([
            'user_id' => $request->user()->id,
            'drink_image' => $posterPath,
            'drink_name' => $request->drink_name,
            'price' => $request->price,
            'availability' => $request->availability,
        ]);

        return redirect()->back()->with('success', 'Drink created!');
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(DrinkRequest $request, string $id)
    {
        $drink = Drink::findOrFail($id);
        $data = $request->validated();

        // Handle image only if a new one is uploaded
        if ($request->hasFile('drink_image')) {
            $data['drink_image'] = $request
                ->file('drink_image')
                ->store('drinks', 'public');
        } else {
            unset($data['drink_image']); // keep old image
        }

        $drink->update($data);

        return redirect()->back()->with('success', 'Edited successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $drink = Drink::find($id);
        $drink->delete();

        return redirect()->back()->with('success', 'Drink deleted!');
    }
}
