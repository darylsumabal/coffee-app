<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class OrderStatus extends Model
{
    protected $fillable = [
        'order_item_id',
        'status',
        'position'
    ];

    public function orderStatus(){
        return $this->belongsTo(OrderItem::class);
    }
}
