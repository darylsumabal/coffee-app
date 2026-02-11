<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class DrinkRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return auth()->check();
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'drink_image' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
            'drink_name' => 'required|string|min:1|max:255',
            'price' => 'required|numeric|min:1',
            'availability' => 'required|string'
        ];
    }
}
