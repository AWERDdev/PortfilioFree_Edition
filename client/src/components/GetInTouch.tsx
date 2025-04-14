export default function Get_In_Touch() {
    return (
      <section className="w-full bg-[#0f172a] py-16 px-4 sm:px-10">
        <div className="max-w-5xl mx-auto bg-[#1f2937] rounded-lg p-8 sm:p-12 flex flex-col md:flex-row justify-between gap-8 text-white">
          {/* Contact Info */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <ul className="space-y-4 text-purple-300">
              <li className="flex items-center gap-2">
                📧 <span>alex.morgan@example.com</span>
              </li>
              <li className="flex items-center gap-2">
                🐙 <span>github.com/alexmorgan</span>
              </li>
              <li className="flex items-center gap-2">
                💼 <span>linkedin.com/in/alexmorgan</span>
              </li>
              <li className="flex items-center gap-2">
                🐦 <span>@alexmorgan_dev</span>
              </li>
            </ul>
          </div>
  
          {/* Message Form */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#374151] text-white px-4 py-2 rounded-md outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#374151] text-white px-4 py-2 rounded-md outline-none"
              />
              <textarea
                placeholder="Your Message"
                className="bg-[#374151] text-white px-4 py-2 rounded-md resize-none h-28 outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-md transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
  