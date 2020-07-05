<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Qualifier;
use Faker\Generator as Faker;

$factory->define(Qualifier::class, function (Faker $faker) {
    return [
        'name' => $faker->product,
        'description' => $faker->unique()->text,
        'code_q' => $faker->unique()->hexColor,
        'qualifier' => $faker->boolean,
        'slug' => $faker->slug,
    ];
});
