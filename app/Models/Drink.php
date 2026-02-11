<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Drink extends Model
{
    protected $fillable = [
        'user_id',
        'drink_image',
        'drink_name',
        'price',
        'availability'
    ];
}
