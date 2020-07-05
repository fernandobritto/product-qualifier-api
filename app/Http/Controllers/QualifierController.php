<?php

namespace App\Http\Controllers;

use App\Qualifier;
use Illuminate\Http\Request;

class QualifierController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json( Qualifier::all(), 201);
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        try{
            Qualifier::create($request->all());
            return response()->json(['data' => ['msg' => 'Product Qualifier!']], 200);

        }catch (\Exception $e){
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }


    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        try{
            $prodQualifier = Qualifier::findOrFail($id);
            return response()->json(['data' => [
                'msg' => 'Product',
                'data' => $prodQualifier,
                'code' => rand()
            ]], 202);

        }catch (\Exception $e){
            return response()->json(['error' => $e->getMessage()], 401);
        }

    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        try{
            $prodQualifier = Qualifier::findOrFail($id);
            $prodQualifier->update($request->all());
            return response()->json(['data' => ['msg' => 'Product Qualifier!']], 200);

        }catch (\Exception $e){
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        try{
            $prodQualifier = Qualifier::findOrFail($id);
            $prodQualifier->delete();
            return response()->json(['msg' => 'Destroy OK'], 200);

        }catch (\Exception $e){
            return response()->json(['error' => $e->getMessage()], 401);
        }
    }
}
