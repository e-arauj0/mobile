<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CriptomoedaController;

Route::get('/', [CriptomoedaController::class,'index'])->name('criptomoedas.index');

Route::get('/create', [CriptomoedaController::class,'create'])->name(name:'criptomoedas.create');

route::post('/store', [CriptomoedaController::class,'store'])->name(name:'criptomoedas.store');