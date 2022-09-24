<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HelloController extends Controller
{
    public function hello(Request $request)
    {
        return response()->json([
            'mensagem' => 'Hello, world! Laravel OK'
        ]);
    }

    public function request(Request $request)
    {
        $dados = $request->all();

        return response()->json([
            'mensagem' => $dados
        ]);
    }


 
}
