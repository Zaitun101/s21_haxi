<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use \App\Http\Controllers\Api\DriverController;
use \App\Http\Controllers\Api\ClientController;
use \App\Http\Controllers\Api\OrderController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
//Route::get('/driver/show', [DriverController::class, 'popular']);

Route::apiResources([
    'driver' => DriverController::class,
    'client' => ClientController::class,
    'order' => OrderController::class
    // 'posts' => PostController::class,
]);