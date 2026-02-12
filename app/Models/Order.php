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

    public function addon()
    {
        return $this->belongsTo(Addon::class);
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class);
    }

    public function drink()
    {
        return $this->belongsTo(Drink::class);
    }
}
