import { Controller, Delete, Get, Params, Patch, Post, Response } from "@decorators/express";

@Controller('/OnePiece')
export class OnePieceController {
  req:any
  res:any
  constructor() {}

  @Get('/')
  getUser(@Response() res) {
    try{
    res.send("Get Funcionando! /OnePiece")
  }catch(err){
    res.send(err.message)
  }}
  @Post('/')
  postUser(@Response() res) {
    try{
    res.send("Post Funcionando! /OnePiece")
  }catch(err){
    res.send(err.message)
  }}
  @Delete('/')
  deleteUser(@Response() res) {
    try{
    res.send("Delete Funcionando! /OnePiece")
  }catch(err){
    res.send(err.message)
  }}
  @Patch('/')
  patchUser(@Response() res) {
    try{
    res.send("Patch Funcionando! /OnePiece")
  }catch(err){
    res.send(err.message)
  }}
}
