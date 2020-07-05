<?php

use Illuminate\Database\Seeder;
use App\Qualifier;


class QualifierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Qualifier::class, 15)->create();
    }
}
