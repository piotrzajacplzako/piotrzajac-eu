import { PERSONAL } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} {PERSONAL.fullName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
