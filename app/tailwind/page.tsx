export default function Page() {
  return (
    <>
      <div className="bg-gray-50 p-8">
        <div className="max-w-6xl mx-auto">
          {/* <!-- Header --> */}
          <header className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className="text-4xl font-bold mb-2">Tailwind CSS Essentials</h1>
            <p className="text-blue-100">
              A visual guide to the most important utility classNamees
            </p>
          </header>

          {/* <!-- Spacing: Padding & Margin --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Spacing (Padding & Margin)
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-blue-100 border-2 border-blue-300">
                p-4 (padding all sides)
              </div>
              <div className="px-6 py-2 bg-green-100 border-2 border-green-300">
                px-6 py-2 (horizontal & vertical)
              </div>
              <div className="pt-8 bg-purple-100 border-2 border-purple-300">
                pt-8 (padding-top only)
              </div>
              <div className="m-4 bg-red-100 border-2 border-red-300">
                m-4 (margin all sides)
              </div>
            </div>
          </section>

          {/* <!-- Typography --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Typography
            </h2>
            <div className="space-y-3">
              <p className="text-xs">text-xs - Extra small text</p>
              <p className="text-sm">text-sm - Small text</p>
              <p className="text-base">text-base - Base text (default)</p>
              <p className="text-lg">text-lg - Large text</p>
              <p className="text-xl">text-xl - Extra large text</p>
              <p className="text-2xl font-bold">
                text-2xl font-bold - 2XL Bold
              </p>
              <p className="text-3xl font-semibold">
                text-3xl font-semibold - 3XL Semibold
              </p>
              <p className="font-light">font-light - Light weight</p>
              <p className="font-normal">font-normal - Normal weight</p>
              <p className="font-medium">font-medium - Medium weight</p>
              <p className="italic">italic - Italic style</p>
              <p className="underline">underline - Underlined text</p>
              <p className="text-center">text-center - Centered</p>
              <p className="text-right">text-right - Right aligned</p>
            </div>
          </section>

          {/* <!-- Colors --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Colors</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-red-500 text-white p-4 rounded">
                bg-red-500
              </div>
              <div className="bg-blue-500 text-white p-4 rounded">
                bg-blue-500
              </div>
              <div className="bg-green-500 text-white p-4 rounded">
                bg-green-500
              </div>
              <div className="bg-yellow-500 text-white p-4 rounded">
                bg-yellow-500
              </div>
              <div className="bg-purple-500 text-white p-4 rounded">
                bg-purple-500
              </div>
              <div className="bg-pink-500 text-white p-4 rounded">
                bg-pink-500
              </div>
              <div className="bg-indigo-500 text-white p-4 rounded">
                bg-indigo-500
              </div>
              <div className="bg-gray-700 text-white p-4 rounded">
                bg-gray-700
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-red-600">text-red-600 - Red text</p>
              <p className="text-blue-600">text-blue-600 - Blue text</p>
              <p className="text-green-600">text-green-600 - Green text</p>
            </div>
          </section>

          {/* <!-- Flexbox --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Flexbox</h2>
            <div className="space-y-4">
              <div className="flex gap-2 bg-gray-100 p-4 rounded">
                <div className="bg-blue-500 text-white p-3 rounded">
                  flex (default)
                </div>
                <div className="bg-blue-500 text-white p-3 rounded">Item 2</div>
                <div className="bg-blue-500 text-white p-3 rounded">Item 3</div>
              </div>
              <div className="flex justify-center gap-2 bg-gray-100 p-4 rounded">
                <div className="bg-green-500 text-white p-3 rounded">
                  justify-center
                </div>
                <div className="bg-green-500 text-white p-3 rounded">
                  Centered
                </div>
              </div>
              <div className="flex justify-between bg-gray-100 p-4 rounded">
                <div className="bg-purple-500 text-white p-3 rounded">
                  justify-between
                </div>
                <div className="bg-purple-500 text-white p-3 rounded">
                  Space
                </div>
                <div className="bg-purple-500 text-white p-3 rounded">
                  Between
                </div>
              </div>
              <div className="flex items-center h-24 bg-gray-100 p-4 rounded">
                <div className="bg-red-500 text-white p-3 rounded">
                  items-center (vertically centered)
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Grid --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Grid</h2>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-indigo-500 text-white p-4 rounded text-center">
                grid-cols-3
              </div>
              <div className="bg-indigo-500 text-white p-4 rounded text-center">
                Column 2
              </div>
              <div className="bg-indigo-500 text-white p-4 rounded text-center">
                Column 3
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-teal-500 text-white p-4 rounded text-center">
                Responsive
              </div>
              <div className="bg-teal-500 text-white p-4 rounded text-center">
                2 on mobile
              </div>
              <div className="bg-teal-500 text-white p-4 rounded text-center">
                4 on desktop
              </div>
              <div className="bg-teal-500 text-white p-4 rounded text-center">
                Grid
              </div>
            </div>
          </section>

          {/* <!-- Borders & Rounded --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Borders & Rounded Corners
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="border-2 border-gray-300 p-4">border-2</div>
              <div className="border-4 border-blue-500 p-4">
                border-4 border-blue-500
              </div>
              <div className="border-2 border-dashed border-red-500 p-4">
                border-dashed
              </div>
              <div className="rounded p-4 bg-purple-100">rounded</div>
              <div className="rounded-lg p-4 bg-green-100">rounded-lg</div>
              <div className="rounded-full p-4 bg-pink-100 text-center">
                rounded-full
              </div>
            </div>
          </section>

          {/* <!-- Width & Height --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Width & Height
            </h2>
            <div className="space-y-4">
              <div className="w-1/2 bg-blue-200 p-3 rounded">
                w-1/2 (50% width)
              </div>
              <div className="w-full bg-green-200 p-3 rounded">
                w-full (100% width)
              </div>
              <div className="w-64 bg-purple-200 p-3 rounded">
                w-64 (16rem/256px width)
              </div>
              <div className="h-24 bg-red-200 p-3 rounded">
                h-24 (6rem/96px height)
              </div>
              <div className="max-w-md mx-auto bg-yellow-200 p-3 rounded">
                max-w-md mx-auto (max width + centered)
              </div>
            </div>
          </section>

          {/* <!-- Shadow & Opacity --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Shadow & Opacity
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="shadow-sm bg-white border p-4 rounded">
                shadow-sm
              </div>
              <div className="shadow bg-white border p-4 rounded">shadow</div>
              <div className="shadow-lg bg-white border p-4 rounded">
                shadow-lg
              </div>
              <div className="shadow-xl bg-white border p-4 rounded">
                shadow-xl
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="opacity-50 bg-blue-500 text-white p-4 rounded">
                opacity-50
              </div>
              <div className="opacity-75 bg-blue-500 text-white p-4 rounded">
                opacity-75
              </div>
              <div className="opacity-100 bg-blue-500 text-white p-4 rounded">
                opacity-100
              </div>
            </div>
          </section>

          {/* <!-- Buttons --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Button Examples
            </h2>
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
                Primary Button
              </button>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
                Success Button
              </button>
              <button className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600">
                Danger Button
              </button>
              <button className="border-2 border-blue-500 text-blue-500 px-6 py-2 rounded hover:bg-blue-500 hover:text-white">
                Outline Button
              </button>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-gray-900">
                Large Button
              </button>
            </div>
          </section>

          {/* <!-- Hover & Transition --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Hover & Transitions
            </h2>
            <div className="space-y-4">
              <div className="bg-blue-500 text-white p-4 rounded hover:bg-blue-700 cursor-pointer">
                hover:bg-blue-700 - Hover over me!
              </div>
              <div className="bg-green-500 text-white p-4 rounded transition duration-300 hover:scale-105 cursor-pointer">
                transition hover:scale-105 - Hover to scale!
              </div>
              <div className="bg-purple-500 text-white p-4 rounded transition-all duration-500 hover:rounded-full hover:bg-pink-500 cursor-pointer">
                Multiple transitions - Hover me!
              </div>
            </div>
          </section>

          {/* <!-- Responsive Design --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Responsive Design
            </h2>
            <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg">
              <p className="text-sm md:text-lg lg:text-2xl font-bold mb-2">
                Responsive Text Size
              </p>
              <p className="text-xs md:text-base">
                This text changes size: small on mobile (sm), base on tablet
                (md), and larger on desktop (lg)
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-200 p-4 rounded">1 col mobile</div>
              <div className="bg-green-200 p-4 rounded">2 col tablet</div>
              <div className="bg-blue-200 p-4 rounded">3 col desktop</div>
            </div>
          </section>

          {/* <!-- Display & Position --> */}
          <section className="bg-white p-6 rounded-lg shadow mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Display & Position
            </h2>
            <div className="space-y-4">
              <div className="block bg-blue-100 p-3 rounded">
                block - Takes full width
              </div>
              <div className="inline-block bg-green-100 p-3 rounded">
                inline-block
              </div>
              <div className="inline-block bg-green-100 p-3 rounded">
                inline-block
              </div>
              <div className="hidden md:block bg-yellow-100 p-3 rounded">
                hidden on mobile, visible on md+
              </div>
              <div className="relative h-32 bg-gray-200 rounded">
                <div className="absolute top-0 right-0 bg-red-500 text-white p-2 rounded">
                  absolute top-0 right-0
                </div>
                <div className="absolute bottom-0 left-0 bg-blue-500 text-white p-2 rounded">
                  absolute bottom-0 left-0
                </div>
              </div>
            </div>
          </section>

          {/* <!-- Footer --> */}
          <footer className="text-center text-gray-600 mt-12 pb-8">
            <p className="text-sm">
              Created with Tailwind CSS • All essential utilities demonstrated
            </p>
          </footer>
        </div>
      </div>
    </>
  );
}
