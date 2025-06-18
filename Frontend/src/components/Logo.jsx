import React from 'react'

function Logo({ className = '', ...props }) {
  return (
             <svg
            className={className}
            viewBox="0 0 260 60"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* "Analytica" in purplish shade */}
            <text
                x="15"
                y="38"
                fill="#C084FC"  // Tailwind's violet-400
                fontFamily="Segoe UI, sans-serif"
                fontSize="24"
                fontWeight="700"
                letterSpacing="0.5"
            >
                SkillMind
            </text>

            {/* "Resume" in vibrant cyan */}
            <text
                x="140"
                y="38"
                fill="#22D3EE" // Tailwind's cyan-400
                fontFamily="Segoe UI, sans-serif"
                fontSize="24"
                fontWeight="700"
                letterSpacing="0.5"
                
                

            >
                Software
            </text>

            

            {/* Accent dots */}
            <circle cx="250" cy="20" r="3.5" fill="#22D3EE" />
            <circle cx="250" cy="30" r="3.5" fill="#C084FC" />
            <circle cx="250" cy="40" r="3.5" fill="#A78BFA" /> {/* Slightly muted purple */}
        </svg>
  )
}

export default Logo