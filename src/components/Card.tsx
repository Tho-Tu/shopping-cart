import { useState, useEffect } from "react";

type cardProps = { itemName: string };

export default function Card({ itemName }: cardProps) {
  return <div>{itemName}</div>;
}
