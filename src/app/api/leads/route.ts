import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { campuses } from "@/lib/content";

const validCampuses = campuses.map((c) => c.name);

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill this hidden field. Pretend success, save nothing.
  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim().toLowerCase();
  const company = String(body.company ?? "").trim();
  const goals = String(body.goals ?? "").trim();
  const selected = Array.isArray(body.campuses)
    ? body.campuses.filter(
        (c): c is string => typeof c === "string" && validCampuses.includes(c)
      )
    : [];

  // Never trust the browser: validate again on the server.
  if (!name || name.length > 100) {
    return NextResponse.json({ error: "Please enter a valid name." }, { status: 400 });
  }
  if (!/^\S+@\S+\.\S+$/.test(email) || email.length > 254) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }
  if (!goals || goals.length > 2000) {
    return NextResponse.json({ error: "Please describe your goals." }, { status: 400 });
  }
  if (company.length > 150) {
    return NextResponse.json({ error: "Company name is too long." }, { status: 400 });
  }

  const { error } = await supabaseAdmin.from("leads").insert({
    name,
    email,
    company: company || null,
    campuses: selected,
    goals,
  });

  if (error) {
    console.error("Supabase insert failed:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}