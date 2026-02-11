function Flag() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col shadow-lg">
        <div className="bg-orange-500 w-164 h-20"></div>
        <div className="bg-white w-164 h-20 flex items-center justify-center">
          <div className="w-10 h-10 border-2 border-blue-700 rounded-full"></div>
        </div>
        <div className="bg-green-500 w-164 h-20"></div>
      </div>
    </div>
  );
}

export default Flag;
