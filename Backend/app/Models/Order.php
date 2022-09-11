<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
  use HasFactory;
  protected $fillable = ['addr1','addr2','date','inform','moderator_checked','phone_client', 'phone_driver'];
  public $timestamps = false;
}
