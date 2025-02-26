<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(\ModuleSystem\Seeders\DatabaseSeeder::class);
        $this->call(\ModuleProcurement\Seeders\DatabaseSeeder::class);
    }
}
