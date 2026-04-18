"use client"
import CookieConsent from "react-cookie-consent"

export default function CookieBanner() {
  return (
    <CookieConsent
      location="bottom"
      buttonText="ยอมรับ"
      declineButtonText="ปฏิเสธ"
      enableDeclineButton
      cookieName="myCookieConsent"
      style={{
        background: "#0f172a",
        fontSize: "14px",
      }}
      buttonStyle={{
        background: "#A37500",
        color: "#fff",
        borderRadius: "999px",
        padding: "8px 16px",
      }}
      declineButtonStyle={{
        background: "#334155",
        color: "#fff",
        borderRadius: "999px",
        padding: "8px 16px",
      }}
    >
      เราใช้คุกกี้เพื่อพัฒนาประสบการณ์ของคุณ 🍪{" "}
      <a href="/privacy" className="text-yellow-400 underline">
        นโยบายความเป็นส่วนตัว
      </a>
    </CookieConsent>
  )
}