"use client";
import React from "react";
import { SimpleWidget } from "..";
import { IoCart } from "react-icons/io5";
import { title } from "process";
import { useAppSelector } from "@/store";

export const WidgetGrid = () => {
  const isCart = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-4 items-center w-152 justify-center">
      <div className="w-72">
        <SimpleWidget
          title={`${isCart}`}
          subtitle="Milagros"
          label="Cap"
          icon={<IoCart size={35} className="text-green-600" />}
          href="/dashboard/counter"
        />
      </div>
      <div className="w-72">
        <SimpleWidget
          title={`${isCart}`}
          subtitle="Maria"
          label="T-shirt"
          icon={<IoCart size={35} className="text-green-600" />}
          href="/dashboard/counter"
        />
      </div>
      <div className="w-72">
        <SimpleWidget
          title={`${isCart}`}
          subtitle="Juan"
          label="Short"
          icon={<IoCart size={35} className="text-green-600" />}
          href="/dashboard/counter"
        />
      </div>
    </div>
  );
};
