import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/40 py-8 mt-12">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="mb-4 sm:mb-0">
          &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
        </p>

        <div className="flex items-center space-x-6">
          <a
            href="https://www.linkedin.com/company/mycompany"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>

          <a
            href="https://github.com/mycompany"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="w-5 h-5" />
          </a>

          <a
            href="https://twitter.com/mycompany"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
