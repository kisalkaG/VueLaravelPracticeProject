<?php

use App\Post;
use App\Tag;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        for($i=1; $i<=15; $i++){
            Post::create([
                'name'=>'name'.$i,
                'description'=>substr(str_shuffle('abcdefghij'),2)
            ]);
        }

        for($i=1; $i<=15; $i++){
            Tag::create([
                'name'=>'name'.$i,
                'items'=>'item'.$i,
            ]);
        }
    }
}
