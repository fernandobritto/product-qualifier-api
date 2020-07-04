<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Qualifier extends Model
{
    protected $fillable = [ 'name', 'description', 'code_q', 'qualifier', 'slug' ];
}
