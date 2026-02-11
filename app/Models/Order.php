<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'addon_id',
        'customer_id',
        'drink_id',
        'temperature',
        'note',
    ];
}
