import { useState, useEffect } from "react";

type cardProps = {
  itemId: number;
  itemName: string;
  itemQuantity: number;
};

export default function Card({ itemId, itemName }: cardProps) {
  return <div>{itemName}</div>;
}
