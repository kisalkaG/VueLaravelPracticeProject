<?php

namespace App\Http\Controllers;

use App\Post;
use App\Tag;
use Illuminate\Http\Request;

class PostCotroller extends Controller
{
    public function getDetails() {        
        // dd(1);
        $post=Post::find(2);
        // $post->tags()->attach([1,2,3]);
        // $post->tags()->detach(1);
        // $post->tags()->sync([2,3,4,5]);
        $post->tags()->syncWithoutDetaching([6,7]);

        $tag=Tag::find(10);
        $tag->posts()->syncWithoutDetaching([6,7]);



        return $post;
        // dd($post->tags()->get());
        
    }
}
