<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use GuzzleHttp\Client;

class ProdutosController extends Controller
{
    private function getProdutosFacestore($page)
    {
        $client = new Client();
        $produtos = $client->request('GET', 'https://api.facestore.pt/v1/products', [
            'headers' => [
                'Content-type' => 'application/json',
                'APIToken' => 'b6829b5d2950221a0a05c8be4c85a00b6b67ce8c'
            ],
            'query' => [
                'page' => $page
            ]
        ])
        ->getBody()
        ->getContents();
        return $produtos;
    }

    public function list(Request $request)
    {
        $produtos = $this->getProdutosFacestore($request->page);
        echo $produtos;
    }
}
