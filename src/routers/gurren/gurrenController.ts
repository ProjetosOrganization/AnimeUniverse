import { Controller, Delete, Get, Params, Patch, Post, Response } from "@decorators/express";

@Controller('/Gurren')
export class GurrenController {
  req:any
  res:any
  constructor() {}

  @Get('/')
  getUser(@Response() res) {
    try{
    res.send("Get Funcionando! /Gurren")
  }catch(err){
    res.send(err.message)
  }}
  @Post('/')
  postUser(@Response() res) {
    try{
    res.send("Post Funcionando! /Gurren")
  }catch(err){
    res.send(err.message)
  }}
  @Delete('/')
  deleteUser(@Response() res) {
    try{
    res.send("Delete Funcionando! /Gurren")
  }catch(err){
    res.send(err.message)
  }}
  @Patch('/')
  patchUser(@Response() res) {
    try{
    res.send("Patch Funcionando! /Gurren")
  }catch(err){
    res.send(err.message)
  }}
}
