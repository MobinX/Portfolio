import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Header } from '../teamerx/header'
import { Navbar } from '../teamerx/nav'
import {Card} from "../teamerx/card"
export default function Home() {
  return (
    <div className="iPhone13 / 13 Pro - 1 flex flex-col space-y-8 items-center justify-start w-full">
      <Navbar />
      <Header />
      <div className="flex flex-col justify-center items-center space-y-5">
        <h1 className="text-xl font-bold">What can you do ?</h1>
        <Card header={"Bussines Plannig"} paragraph={"We render the bussines solution"} />

      </div>
    </div> )
}
