import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZkc2R0b3Vpb2tndnpyc2Nhcm9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMTU1NjQsImV4cCI6MjA1Njc5MTU2NH0.zZ_PsL3vXmNNaaWWu9yHGdYn7vfYhzH4jpAwyG9tJqA"; // 🔴 Reemplázalo con tu URL de Supabase
const SUPABASE_KEY = "tu-clave-secreta"; // 🔴 Reemplázalo con tu API Key

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);