import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { IconUpload } from '@tabler/icons-react';

function UploadSection({ onFileUpload, files }) {
  const onDrop = useCallback((acceptedFiles) => {
    onFileUpload(acceptedFiles);
  }, [onFileUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 rounded-xl p-6 cursor-pointer hover:border-blue-500 transition-all bg-black"
      >
        <input {...getInputProps()} />
        <IconUpload size={40} className="text-blue-500 mb-2" />
        {
          isDragActive ? (
            <p className="text-blue-600 font-medium">Drop the files here ...</p>
          ) : (
            <p className="text-gray-700">Drag & drop files here, or click to browse</p>
          )
        }
      </div>

      {/* Display uploaded file names */}
      {files.length > 0 && (
        <div className="bg-black border rounded p-4 shadow-sm">
          <h2 className="font-semibold text-teal-300 mb-2">Uploaded Files:</h2>
          <ul className="list-disc list-inside text-sm text-teal-300">
            {files.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default UploadSection;
