"use client";

import React, { useCallback, useRef } from "react";
import { FieldValues } from "react-hook-form";
import { X } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { FileUploadFieldProps } from "@/types/action";

const FileUploader = <T extends FieldValues>({
  label,
  acceptTypes,
  disabled,
  icon: Icon,
  placeholder,
  hint,
  value,
  fieldChange,
}: FileUploadFieldProps<T>) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        fieldChange(file);
      }
    },
    [fieldChange]
  );

  const onRemove = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      fieldChange(null);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    },
    [fieldChange]
  );

  const isUploaded = !!value;

  return (
    <FormItem className="w-full">
      <FormLabel className="form-label">{label}</FormLabel>

      <FormControl>
        <div
          className={cn(
            "flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-blue-400 bg-blue-50 px-4 py-6 text-sm font-medium text-blue-700 transition hover:bg-blue-100",
            isUploaded && "upload-dropzone-uploaded"
          )}
          onClick={() => !disabled && inputRef.current?.click()}
        >
          <input
            type="file"
            accept={acceptTypes.join(",")}
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange}
            disabled={disabled}
          />

          {isUploaded ? (
            <div className="flex justify-center gap-5 items-center relative w-full px-4">
              <p className="text-sm line-clamp-1">{(value as File).name}</p>

              <button
                type="button"
                onClick={onRemove}
                className="upload-dropzone-remove cursor-pointer"
              >
                <X className="size-5" />
              </button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <Icon />
              <p className="upload-dropzone-text">{placeholder}</p>
              <p className="upload-dropzone-hint">{hint}</p>
            </div>
          )}
        </div>
      </FormControl>

      <FormMessage />
    </FormItem>
  );
};

export default FileUploader;
