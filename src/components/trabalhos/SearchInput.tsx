import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const SearchInput = ({ value, onChange, placeholder, className }: SearchInputProps) => (
  <div className={`relative ${className || ""}`}>
    <Search 
      className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" 
      aria-hidden="true"
    />
    <Input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder || "Buscar trabalho, cliente ou palavra-chave"}
      className="pl-10 bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
      aria-label={placeholder || "Buscar trabalho, cliente ou palavra-chave"}
    />
  </div>
);
